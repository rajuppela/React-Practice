
const TableItems = (prop)=>{
    const {id,title,price,category,image,description} = prop.data
    return(
        <tr border={1}>
            <td border={1}>{id}</td>
            <td border={1}>{title}</td>
            <td border={1}>{description}</td>
            <td border={1}>{price}</td>
            <td border={1}><img src={image} width={100} height={100}></img></td>
            <td border={1}>{category}</td>
        </tr>
    )
}
export default TableItems