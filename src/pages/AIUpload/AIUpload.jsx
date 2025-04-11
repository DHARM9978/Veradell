import React, { useState, useCallback } from 'react';
import './AiUpload.css';

const AIFashionUpload = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    };

    const handleFile = (file) => {
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a valid image file (PNG, JPG, JPEG)');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setUploadedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleGetClothes = () => {
        // Add your logic for getting clothes recommendations here
        alert('Getting your personalized clothing recommendations...');
    };

    return (
        <div className="container">


            <h1>AI Fashion Recommendations</h1>
            <p className="subtitle">Upload your image and get personalized clothing suggestions</p>

            <div
                className={`upload-area ${isDragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {uploadedImage ? (
                    <div className="image-preview">
                        <img src={uploadedImage} alt="Uploaded preview" />
                        <button className="change-btn" onClick={() => setUploadedImage(null)}>Change Image</button>
                    </div>
                ) : (
                    <>
                        <div className="upload-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                        </div>
                        <p className="upload-text">Drag & Drop your image here</p>
                        <p className="upload-text">or</p>
                        <label htmlFor="file-upload" className="upload-btn">
                            Click to Upload
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </label>
                        <p className="file-types">Supports PNG, JPG, JPEG</p>
                    </>
                )}
            </div>

            <p className="description">
                Our AI will analyze your image and provide personalized clothing recommendations based on your style preferences and current fashion trends.
            </p>
            <div className="middle-section">
                <button className="get-clothes-btn middle-btn" onClick={handleGetClothes}>
                    Get Suitable Clothes
                </button>
            </div>

            <div className="features">
                <h2>How It Works</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>Easy Upload</h3>
                        <p>Simple drag & drop interface for quick image uploads</p>
                    </div>
                    <div className="feature-card">
                        <h3>AI Analysis</h3>
                        <p>Advanced AI technology analyzes your style preferences</p>
                    </div>
                    <div className="feature-card">
                        <h3>Smart Recommendations</h3>
                        <p>Get personalized clothing suggestions that match your style</p>
                    </div>
                </div>
            </div>



            <p className="privacy-note">
                Your privacy is important to us. All uploaded images are processed securely and not stored permanently.
            </p>
        </div>
    );
};

export default AIFashionUpload;