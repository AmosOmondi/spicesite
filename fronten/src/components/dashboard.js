import React from 'react'
import MyImage from '../images/one.jpg'
import logo from '../images/logo.png'
import spices from '../images/spices.png'
import nuts from '../images/nuts.png'
import oils from '../images/oils.png'

const Dashboard = () => {
return (



<div>

  <div className="grid-container">
        <div class="sidebar box">
<div className="sidebar grid-gap rect-size box">
<img src={logo} alt='logo' className="logo-size"/>
</div>

<div className="sidebar grid-gap rect-size-small box">

<img src={spices} alt='spice' className="spices-size"/>


</div>

<div className="sidebar grid-gap rect-size-small box">
<img src={nuts} alt='nuts' className="spices-size"/>
</div>

<div className="sidebar grid-gap rect-size-small box">
<img src={oils} alt='oils' className="spices-size"/>
</div>

<div className="sidebar grid-gap rect-size box">
five
</div>


</div>
        <div className="main-picture">
<img src={MyImage}  fill alt='main'/>

</div>
        <div className="picture-1">Picture 1</div>
        <div className="picture-2">Picture 2</div>
    </div>

</div>

  






)
}
export default Dashboard