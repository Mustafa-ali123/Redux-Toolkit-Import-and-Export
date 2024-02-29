import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import Modal from '@mui/material/Modal';
import { Post } from '../config/ApiBase/ApiBase';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Upload } from 'antd';

const style = {
    position: 'absolute',
    bottom: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 6,
    color: "black"
};

export default function BasicModal(props) {
    let { open, closed, upload, unUpload, state } = props
    
    const [file, setFile] = useState()
    const handleClose = () => {
        closed(false)
        unUpload(upload)
    }
    const handleYes = () => {
        if (upload) {
            checkFile()
        } else {
            state()
        }
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }
    const checkFile = () => {
        if (file) {
            const formData = new FormData()
            formData.append("csvFile", file)
            Post("todolist/uploadFile", formData).then((res) => {
                console.log(res)
                handleClose()
                unUpload(upload)
            }).catch((e) => {
                console.log(e)
                handleClose()
                unUpload(upload)
            })
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="text-center">
                    <Button
                        className=''
                        variant='contained'
                        color="error"
                        onClick={handleClose}
                        style={{ position: 'absolute', top: 0, right: 0 }}
                    >
                        X
                    </Button>
                    {!upload ? <Typography id="modal-modal-title" variant="h6" component="h2">
                        Download the all task csv file
                    </Typography> : <div>
                        <input
                            name='csvFile'
                            type='file'
                            onChange={handleFileChange}
                            className='fileInput'
                        />
                    </div>}
                    <Button style={{ textTransform: 'capitalize' }} variant='contained' color="primary" className='mt-4 mx-2' onClick={() => {
                        handleYes()
                    }} >{upload ?
                        (<>
                            Upload Csv/Excel Flie
                            <UploadFileIcon className='ms-2' />
                        </>) :
                        (<>
                            Download <FileDownloadIcon className='ms-1' />
                        </>)}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}