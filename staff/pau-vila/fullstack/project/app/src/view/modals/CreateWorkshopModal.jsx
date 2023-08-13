import context from "../../context"
import createWorkshop from "../../logic/createworkshop"

function CreateWorkshopModal(props) {
    console.log('CreateWorkshopModal -> render')
  
    const workshop = {}

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const description = event.target.description.value
        const place  = event.target.place.value 
        const codeZIP = event.target.codeZIP.value
        const dateStart = Date.parse(event.target.datestart.value)
        const dateEnd = Date.parse(event.target.dateend.value)
        const video = event.target.video.value
        const attendantsLimit = Number(event.target.attendantslimit.value)
       
        try { 
            createWorkshop(context.token, description, place,
            codeZIP, dateStart, dateEnd, attendantsLimit, image, video  )
                .then(() => props.onWorkshopCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelClick = () => props.onCreateWorkshopCancelled()

    return <div className="home-create-workshop-modal" >
        <div className="home-create-workshop-container">
            <h2>Create workshop</h2>

            <form className="home-create-workshop-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="description">Description</label>
                <textarea id="description"></textarea>

                <label for="place">Lugar</label>
                <input type="text" id="place"></input>

                <label for="zip">Código Postal</label>
                <input type="text" id="zip"></input>

                <label for="dateStart">Fecha de inicio</label>
                <input type="date" id="dateStart"></input>

                <label for="dateEnd">Fecha de finalización</label>
                <input type="date" id="dateEnd"></input>

                <label for="video">Video</label>
                <input type="file" id="video" accept="video/*" ></input>

                <label for="attendantsLimit">Límite de asistentes</label>
                <input type="number" id="attendantsLimit" min="1" max="13"></input>
                
                <button type="submit">Create</button>
                <button className="home-create-workshop-cancel-button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div >
}
export default CreateWorkshopModal

