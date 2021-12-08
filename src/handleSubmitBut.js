const handleSubmitBut = (event,cookies,history) => {
    event.preventDefault();
    console.log(event.target[0].value.toUpperCase());
    cookies.set("fav",event.target[0].value.toUpperCase())
    history.push("/budget-finder");
}
export default handleSubmitBut;