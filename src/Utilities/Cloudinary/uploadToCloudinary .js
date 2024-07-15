import axios from "axios";

export const uploadToCloudinary = async (image) => {
    if (!image) {
        alert('Please select an image to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'ct17liqy'); 

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/daleaasag/image/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const data = response.data.url;
        console.log('Image uploaded successfully:', response.data.url);
        return data;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
    }
    
};
