import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);


    useEffect(() => {
        fetch('https://powerful-anchorage-68667.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts])

    return [parts, setParts];
}

export default useParts;