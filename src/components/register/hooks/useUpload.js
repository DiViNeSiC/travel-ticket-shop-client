import { useState, useRef, useEffect } from "react"
import defaultImage from '../../../assets/images/defaultImage.png'

export default () => {
    const [selectedFile, setSelectedFile] = useState()
    const [displayFile, setDisplayFile] = useState(defaultImage)

    const avatarInputRef = useRef()

    useEffect(() => {
        if(!selectedFile) 
            return setDisplayFile(defaultImage)

        const objectUrl = URL.createObjectURL(selectedFile)        
        setDisplayFile(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        const { files } = e.target
        if (!files || files.length === 0) {
            return setSelectedFile(defaultImage)
        }

        setSelectedFile(e.target.files[0])
    }

    return { displayFile, avatarInputRef, onSelectFile }
}