import React, {useState}  from 'react';
import { withRouter } from 'react-router-dom';
import Webcam from 'react-webcam'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import UpdateAnimal from '../Animal/UpdateAnimal'

const videoConstraints = {
    width: 800,
    height: 800
}



function CaptureScreen(props) {
    
    const [imageData, setImageData] = useState(null);
    const [imageName, setImageName] = useState('');
    const [saveImage, setSaveImage] = useState(false);
    const [webcam, setWebcam] = useState(null);

    const setRef = (webcam) =>{
        if(webcam) setWebcam(webcam);
    }
    
    const capture = () => {
        const imageSrc = webcam.getScreenshot();
        setImageData(imageSrc);
    }
    
    const onClickRetake = (e) =>{
        e.persist();
        const imageSrc = webcam.getScreenshot();
        setImageData(imageSrc);
    }
    
    const onClickSave = (e) =>{
        e.persist();
        setSaveImage(!saveImage);
    }

    const upload = (e) => {
        debugger;
    }
    
    const handleChange = (e) =>{
        e.persist();
        setImageName(e.target.value);
    }
    
    const handleSaveSubmit = (e) =>{
        e.preventDefault();
        let imageObject = {
            image_name: imageName,
            image_data: imageData
        };
        //save
    }
    
    const saveForm = () =>{
        return (
            <div>
                <form onSubmit={this.handleSaveSubmit}>
                    <p>
                        <label>
                            Image Name:
                        </label>
                        <input type="text"
                        name='image_name'
                        value={imageName}
                        onChange={handleChange} />
                        <input type="submit" value="Save"/>
                    </p>
                </form>
            </div>
        )
    }

    return (
        <Card>
            
            {imageData?
                // <div>
                //     <p><img src={imageData} alt={imageName}/></p>
                //     <span><button onClick={onClickRetake}>Retake</button></span>
                //     <span><button onClick={onClickSave}>Save</button></span>
                //     {
                //         saveImage? saveForm() : null
                //     }
                // </div>
                <div>
                    <CardContent>
                        <UpdateAnimal animalImage={imageData} store={props.store} auth={props.auth}/>
                    </CardContent>
                </div>
                :<div>
                    <div>
                        <Webcam
                        audio={false}
                        width={window.innerHeight/2}
                        height={window.innerHeight/2}
                        ref={setRef}
                        screenshotFormat='image/jpeg'
                        videoConstraints={videoConstraints}
                        />
                    </div>
                <Button color='primary' onClick={capture}>Capture</Button> 
                </div>
            }
            
        </Card>
    )

}

export default withRouter(CaptureScreen);
