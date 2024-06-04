import { useState } from 'react';
import './App.css';

function App() {
	const [encryptedmsg, setEncryptedmsg] = useState('');
	const [decryptedmsg, setDecryptedmsg] = useState('');

	return (
		<div className="w-full h-full bg-no-repeat bg-cover" style={{backgroundImage:"url('bg.jpeg')"}}>
		<div className="w-full h-full flex flex-col items-center justify-start py-6" style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
			<div className="text-6xl font-bold text-white ">Caeser's Ciphar</div>
			
			<div className='mt-6 italic text-white font-semibold text-lg underline'>Encrypt Message</div>
			<div className='w-[1000px] mt-4 flex flex-row items-center justify-between'>
				<div className='w-[400px]'>
					<textarea placeholder='Write your message here' className='text-sm p-2 w-[400px] h-[150px] bg-transparent text-white active:outline-none focus:outline-none resize-none' style={{border:'2px white solid'}}>
						
					</textarea>
				</div>
				<div className='w-[100px] font-semibold flex flex-row items-center justify-center py-2 px-4 cursor-pointer rounded-md shadow-lg bg-amber-700 text-white'>
					Encrypt
				</div>
				<div className='text-sm min-w-[400px] max-w-[400px] min-h-[150px] max-h-[150px] overflow-x-hidden overflow-y-auto text-white' style={{border:'2px white dashed'}}>
					{encryptedmsg}
				</div>
			</div>

			<div className='mt-20 italic text-white font-semibold text-lg underline'>Decrypt Message</div>
			<div className='w-[1000px] mt-4 flex flex-row items-center justify-between'>
				<div className='w-[400px]'>
					<textarea placeholder='Write your encrypted message here' className='text-sm p-2 w-[400px] h-[150px] bg-transparent text-white active:outline-none focus:outline-none resize-none' style={{border:'2px white solid'}}>
						
					</textarea>
				</div>
				<div className='w-[100px] font-semibold flex flex-row items-center justify-center py-2 px-4 cursor-pointer rounded-md shadow-lg bg-amber-700 text-white'>
					Decrypt
				</div>
				<div className='text-sm min-w-[400px] max-w-[400px] min-h-[150px] max-h-[150px] overflow-x-hidden overflow-y-auto text-white' style={{border:'2px white dashed'}}>
					{encryptedmsg}
				</div>
			</div>
		</div>
		</div>	
	);
}

export default App
