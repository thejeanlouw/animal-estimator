import React, {useState}  from 'react';
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
}



export default function CaptureScreen(props) {
    
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
        debugger;
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
        debugger;
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
        <div>
            <Webcam
            audio={false}
            width={350}
            height={350}
            ref={setRef}
            screenshotFormat='image/jpeg'
            videoConstraints={videoConstraints}
            />
            <div className='button-container'><button onClick={capture}>Save Image</button></div> 
            {imageData?
                <div>
                    <p><img src={imageData} alt={imageName}/></p>
                    <span><button onClick={onClickRetake}>Retake</button></span>
                    <span><button onClick={onClickSave}>Save</button></span>
                    {
                        saveImage? saveForm() : null
                    }
                </div>
                :null
            }
        </div>
    )

}
