const PageHeader=(props)=>{

    const{headerText,icon} = props;

return (
    <div className="page-head">

<div>
    <h2>{headerText}</h2>
</div>


<div className="page-icon">

{icon}

</div>


    </div>
)

}
export default PageHeader;