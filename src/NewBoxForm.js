import {useState} from "react"

function NewBoxForm({handleForm}) {

  let initialData = {
    width:"",
    height:"",
    backgroundColor:""
  }

  const [formData, setFormData] = useState(initialData)

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleForm(formData)
    setFormData(initialData)
  }

  return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="width">Width: </label>
    <input
      id="width"
      name="width"
      value={formData.width} 
      onChange={handleChange}/>

    <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        value={formData.height} 
        onChange={handleChange}/>

    <label htmlFor="backgroundColor">Background Color: </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange} />
    <button>SUBMIT</button>
  </form>
  )
}

export default NewBoxForm;