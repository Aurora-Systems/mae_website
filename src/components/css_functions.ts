export const bg_img=(image_source:string)=>{
    return(
        {
            backgroundImage:`url(${image_source})`,
            backgroungPosition: 'center',
            backgroundSize:'cover',
            height: '80vh'
        }
    )
}

export const bg_img_parts=(image_source:string)=>{
    return(
        {
            backgroundImage:`url(${image_source})`,
            backgroungPosition: 'center',
            backgroundSize:'cover',
            height: '250px'
        }
    )
}