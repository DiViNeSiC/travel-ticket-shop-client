import { useContext } from "react"
import { GlobalContext } from '../../../context/contextProvider/provider'
import create from '../../../context/actions/controlProduct/create'

export default () => {
    const {
        controlProductDispatch, 
        controlProductState: {
            loading,
            segmentShow,
            success,
            error,
        }
    } = useContext(GlobalContext)

    const onSubmit = (e) => {
        const formData = new FormData(e.target)

        handleCreate(formData)
    }

    const handleCreate = async (formData) => {
        create(formData)(controlProductDispatch)
    }

    return {
        onSubmit,
        controlProductDispatch,
        loading,
        segmentShow,
        success,
        error,
        type: error ? 'error' : 'success'
    }
}