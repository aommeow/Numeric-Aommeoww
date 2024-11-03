import 'bootstrap/dist/css/bootstrap.min.css'
import React  from 'react';
import Formnewton from '../Components/Formnewton';
import Navbar from './Navbar';


export default function Newton(){
		  return (
			<div>
				<Navbar/>
				<br/>
				<div className='container'>
							<h1 className='m-2'>Newton Raphson Method</h1>
							<Formnewton />
							<br/><br/><br/>
				</div>
			</div>
		  );
		};