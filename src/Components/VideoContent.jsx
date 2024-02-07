import { GoArrowRight } from "react-icons/go"; 
import { useRef, useEffect, useState } from "react";
const VideoContent = () => {

  const iframeRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState(0);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Function to set the height of the left div to match the iframe
    function setLeftHeightToIframeHeight() {
      if (iframe && iframe.contentWindow && iframe.contentWindow.document.body) {
        setLeftHeight(iframe.contentWindow.document.body.scrollHeight);
      }
    }

    // Call the function initially and then on iframe load
    setLeftHeightToIframeHeight();
    iframe.addEventListener('load', setLeftHeightToIframeHeight);

    return () => {
      iframe.removeEventListener('load', setLeftHeightToIframeHeight);
    };
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center col-12 mt-5 mb-5">
        <div className="col-6 p-5 justify-content-centre" style={{ backgroundColor: "darkorange", color: "white", height: leftHeight }}>
          <p className="fs-2">Action Packed</p>
          <div className="mt-3 mb-3">
            Lorem Ipsum is simply dummyunchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
          <p className="fs-4">See Collection <GoArrowRight /></p>
        </div>
          <iframe className="col-4" width="620" ref={iframeRef} height="350" src="https://www.youtube.com/embed/Xe3evWq5tas?si=2DQCAXywJg5RAXvT" title="Shopping Video" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default VideoContent;
