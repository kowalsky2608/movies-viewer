function redirect(id){
    const view = window.open("")
    const content = `
    <video width="100%" height="600" controls>
    <source src="uploads/movie${id}.mp4" type="video/mp4">
  </video>
    `

    view.document.write(content)
}