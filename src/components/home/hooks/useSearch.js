import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../Context/ContextProvider/provider"
import { searchFilter } from '../../../Context/ViewProducts/actions'

export default () => {
    const [queries, setQueries] = useState({})
    const { viewProductDispatch } = useContext(GlobalContext)

    const onChange = ({ target: { name, value }}) => { 
        const searchValue = name !== 'title' ? parseInt(value) : value.replace(/\s/g, "")
        setQueries({ ...queries, [name]: searchValue })
    }

    const search = () => { searchFilter(queries)(viewProductDispatch) }

    useEffect(search, [queries])
    return { onChange }
}