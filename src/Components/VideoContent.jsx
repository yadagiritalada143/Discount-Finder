import { GoArrowRight } from "react-icons/go";const VideoContent = () => {

  return (
    <>
        <div className="d-flex justify-content-center col-12 mt-5 mb-5">
            <div className="col-6 p-5 justify-content-centre" style={{backgroundColor: "darkorange", color: "white"}}>
                <p className="fs-2">Action Packed</p>
                <div className="mt-3 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                <p className="fs-4">See Collection <GoArrowRight /></p>
            </div>
            <div className="col-4">
            <iframe width="620" height="350" src="https://www.youtube.com/embed/Xe3evWq5tas?si=2DQCAXywJg5RAXvT" title="Shopping Video" allowFullScreen></iframe>
            </div>
        </div>
    </>
  )
}

export default VideoContent;