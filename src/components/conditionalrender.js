const ConditionalRender = ({conditional, children}) =>{
    if (conditional) return children;
    return null
}

export default ConditionalRender