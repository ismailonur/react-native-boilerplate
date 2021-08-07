import React from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { DEFAULT } from '~images';
import PropTypes from 'prop-types';
import {SFImage} from "../SFImage";
import { Request } from '../../request';
import { copy_file, download_file_to_cache, file_exists, get_cache_directory, get_dir_for_meme_type } from '../../Ops/API/FS';
import Logger from '../../Logger';

class ProfilePicture extends React.Component {
    
    state = {
        path:null,
        picture_loaded:null,
    }

    componentDidMount(){
        this.load_image();
    }

    componentDidUpdate(){
        if(this.props.picture != this.state.picture_loaded)
            this.load_image();
    }

    load_image = async()=>{
        const {picture} = this.props;
        if(!picture)
            return Logger.log("ProfilePicture","Picture is null");
        if(await this.use_cache())
        return Logger.log("ProfilePicture","Using cache");
        const uri = `${Request.baseURL}/img/${picture}`;
        let path = `${get_cache_directory()}/profile_pictures/${picture}.jpg`;
        const {data,error} = await download_file_to_cache(uri);
        if(!data)
            return;
        await copy_file(data,path);
        await this.use_cache();
    }
    
    use_cache = async()=>{
        const {picture} = this.props;
        let path = `${get_cache_directory()}/profile_pictures/${picture}.jpg`;
        if(Platform.OS == "android")
            path = `file://${path}`
        if(await file_exists(path)){
            this.setState({picture_loaded:picture,path});
            return true;
        }
        return false;
    }
	render() {
        const {width,height,rounded=true} = this.props;
        const {path,picture_loaded} = this.state;
        const style = {width,height};
        if(rounded)
            style.borderRadius = 2000;

        if(picture_loaded)
            return (
                <Image style={style} width={width} height={height} source={{uri:path}}/>
            );
        return(
            <SFImage {...this.props} source={DEFAULT}/>
        );
	}
}
export { ProfilePicture };