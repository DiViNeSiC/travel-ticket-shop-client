import { useState, useRef, useEffect } from "react"
import defaultImage from '../../../Assets/Images/default-profile-Image.png'

export default () => {
    const avatarInputRef = useRef()
    const [selectedFile, setSelectedFile] = useState()
    const [displayFile, setDisplayFile] = useState(defaultImage)

    useEffect(() => {
        if(selectedFile == null || selectedFile === defaultImage) { 
            setSelectedFile(null)
            return setDisplayFile(defaultImage)
        }

        const objectUrl = URL.createObjectURL(selectedFile)        
        setDisplayFile(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = ({ target: { files }}) => {
        if (files[0] == null || files.length === 0) return setSelectedFile(defaultImage)
        setSelectedFile(files[0])
    }

    const onClearFile = () => {
        setSelectedFile(null)
        setDisplayFile(defaultImage)
    }

    return { 
        onClearFile,
        displayFile, 
        onSelectFile, 
        selectedFile, 
        avatarInputRef,
    }
}