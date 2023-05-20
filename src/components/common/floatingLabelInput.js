import React from "react";

const FloatingLabelInput = (props) => {
	return (
		<div class="relative w-full mt-8">
			<input
				type={props?.type || "text"}
				id={`floating_outlined_${props.id}`}
				className={`block text-white px-2 w-full text-base h-7 bg-transparent border-b 
					 ${props.value!='' ?
					 	props.error ? "border-[red]" : "border-b-[#F8A932]"
					 	: props.error ? "border-[red]" : "border-b-[#393939]"
					}
					 appearance-none focus:outline-none focus:ring-0 peer`}
				placeholder=""
				value={props.value}
				onChange={props.onChange}
			/>

			<label
				for={`floating_outlined_${props.id}`}
				className={`absolute text-white duration-300 transform bg-transparent 
					top-2 origin-[0] px-2 
					${props.value!='' ? '-translate-y-6 scale-75' : 'translate-y-[-6px] scale-100'}
					peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:top-2 peer-focus:px-2`}
			>
				{props.label}
			</label>
		</div>
	);
};

export default FloatingLabelInput;
