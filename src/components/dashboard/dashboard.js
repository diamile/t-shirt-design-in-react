import React,{setState}from 'react';
import Display from '../design/Display';
import Settings from '../design/Setting';
import { storage } from '../../config/firebaseConfig';
 
export default class Dashboard extends React.Component{
    state={
        tshirtColor:'black',
        upperText:'this is Upper Text',
        lowerText:'this is Lower Text',
        textSize:44,
        textColor:'white',
        url:'',
        logo:'',
        memeImg:''
    }

    //modification du couleur des tshirts
   handleTshirtColor=(e)=>{
    e.preventDefault();
    this.setState({tshirtColor:e.target.id})
   }

   //rendre le text uppertext dynamique
   handleUpperText=(e)=>{
       e.preventDefault();
       this.setState({upperText:e.target.value});
   }

  //idem pour le text lowerText
   handleLowerText=(e)=>{
       e.preventDefault();
       this.setState({lowerText:e.target.value});
   }

   //modifier la taille du text
    handleSizeText=(e)=>{
        e.preventDefault();
        this.setState({textSize:e.target.value});
    }

    //parser la valeur du size
    formatText(){
        const size=this.state.textSize;
        return parseInt(size);
    }

    //modification de la couleur du text
    handleTextColor=(e)=>{
        this.setState({textColor:e.target.value});
    }

    //uploader l'image du tea-shirt
    handleImageUpload=(e)=>{
        if(e.target.files[0]){
            console.log('data',e.target.files[0]);
            const image=(e.target.files[0]);
            const uploadTask=storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',(snapshot)=>{console.log(snapshot)},
            (error)=>{console.log(error);
            
            },

            ()=>{
                storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                    this.setState({url});
                })
            }
            );
        }
    }

    //ulpoader le logo du tea-shirt
    handleImageUploadLogo=(e)=>{
        if(e.target.files[0]){
            console.log('data',e.target.files[0]);
            
            const image=(e.target.files[0]);
            
            const uploadTask=storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',(snapshot)=>{console.log(snapshot)},
            (error)=>{console.log(error);
            
            },

            ()=>{
                storage.ref('images').child(image.name).getDownloadURL().then(logo=>{
                    this.setState({logo});
                })
            }
            );
        }
    }


    render(){
        return(<div className="container py-5">
            <div className="row">
                <div className="col-lg-8">
                <Display 
                display={this.state}
                textFormat={this.formatText()}/>
                </div>

                <div className="col-lg-4">
                <Settings 
                color={this.handleTshirtColor} 
                UpperText={this.handleUpperText}
                LowerText={this.handleLowerText}
                TextSize={this.handleSizeText}
                TextColor={this.handleTextColor}
                UploadImage={this.handleImageUpload}
                UploadLogo={this.handleImageUploadLogo}
                />
                </div>

            </div>
            
            
        </div>);
    }
}
