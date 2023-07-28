import { useState } from "react"

const Header = () => {
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("all")

    console.log(search,select)
    
    return (
        <div className='container mt-5'>
            <h1 className='text-center my-5'>Books or Magazines</h1>
            <div className="input-group mb-3">
                <input type="search" className="form-control w-75" placeholder="Search Book..." onChange={(e)=>setSearch(e.target.value)}/>
                <select className="form-select w-25 text-center" aria-label="Default select example" onChange={(e)=>setSelect(e.target.value)}>
                    <option selected value={"all"}>All</option>                    
                    <option value={"books"}>Books</option>
                    <option value={"magazines"}>Magazines</option>
                </select>
            </div>         

        </div>

    )
}

export default Header