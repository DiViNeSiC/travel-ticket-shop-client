import { useState, useRef, useEffect } from "react"
import defaultImage from '../../../assets/images/default-profile-Image.png'

export default () => {
    const [selectedFile, setSelectedFile] = useState()
    const [displayFile, setDisplayFile] = useState(defaultImage)

    const avatarInputRef = useRef()

    useEffect(() => {
        if(selectedFile == null || selectedFile === defaultImage) { 
            setSelectedFile(null)
            return setDisplayFile(defaultImage)
        }

        const objectUrl = URL.createObjectURL(selectedFile)        
        setDisplayFile(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        const { files } = e.target
        if (files[0] == null || files.length === 0) {
            return setSelectedFile(defaultImage)
        }

        setSelectedFile(e.target.files[0])
    }

    const onClearFile = () => {
        setSelectedFile(null)
        setDisplayFile(defaultImage)
    }

    return { 
        selectedFile, 
        displayFile, 
        avatarInputRef, 
        onSelectFile, 
        onClearFile 
    }
}