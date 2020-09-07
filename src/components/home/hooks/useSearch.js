import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../../context/contextProvider/provider"
import searchFilter from '../../../context/actions/viewProduct/searchFilter'

export default () => {
    const { viewProductDispatch } = useContext(GlobalContext)
    const [queries, setQueries] = useState({})

    const onChange = (e) => { 
        const { name, value } = e.target
        const searchValue = 
            name !== 'title' ?
            parseInt(value) :
            value.replace(/\s/g, "")

        setQueries({ ...queries, [name]: searchValue })
    }

    const search = () => {
        searchFilter(queries)(viewProductDispatch)
    }

    useEffect(search, [queries])

    return { onChange }
}