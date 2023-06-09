import React, {useRef} from 'react';
import {FileInputWrapper, Image, ButtonWrapper, FileInputButton} from './index.styles.js';
import {Button} from '../button';

export const FileInput = ({value, onChange, buttonLabel}) => {
    const inputFileRef = useRef(null);

    const onFileUpload = ({target}) => {
        if (target.files.length) {
            const freshImgUrl = URL.createObjectURL(target.files[0]);
            onChange(freshImgUrl);
        }
    };

    const onAddImageClick = () => {
        inputFileRef.current.click();
    };

    return (
        <FileInputWrapper>
            <Image imageUrl={value}/>
            <ButtonWrapper>
                <FileInputButton ref={inputFileRef} type='file' onChange={onFileUpload}/>
                <Button withBorder view='secondary' onClick={onAddImageClick}>
                    {buttonLabel || 'Select image'}
                </Button>
            </ButtonWrapper>            
        </FileInputWrapper>
    );
};