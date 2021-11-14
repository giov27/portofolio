import '../assets/css/SkillList.css'

const SkillsList = () => {
  return (
    <div className='container-fluid py-5' id='skill'>
      <h1 className='title py-5'>SKILLS</h1>
      <div className='d-flex justify-content-around'>
        <div className='vertical-line'>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className='vertical-line'>
          <ul>
            <li>ReactJS</li>
            <li>Python</li>
            <li>GIT</li>
            <li></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default SkillsList
