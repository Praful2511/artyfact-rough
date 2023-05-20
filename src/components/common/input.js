import React from "react";

const Input = (props) => {

	return (
		<div class="relative mt-8">
			<div className={`flex ${props.optional ? "justify-between" : ""}`}>
				<label
					id={`lbl${props.id}`}
					for={props.id}
					className=" text-txt font-semibold text-black "
				>
					{props.label} {props.id != 'cardNumber' && props.id != 'cardNumber' && props.id != 'bankName' && props.id != 'expirationDate' && props.id != 'cvv'}
				</label>
				{!props.cardLayout && (props.optional ?
					<p className=" text-txt  text-inputBorder">
						Optional
					</p> : <span className="text-red ml-1">*</span>)}
			</div>
			<input
				maxLength={props.maxLength}
				type={`${props.type ? props.type : "text"}`}
				disabled={props.disabled}
				name={props.id}
				id={props.id}
				className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px] text-txt text-gray-900  ${props.disabled ? "bg-lightgray" : "bg-white"}  border ${props.error ? "border-[red]" : "border-inputBorder "
					} appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
				placeholder={`Enter ${props.placeholder ? `${props.placeholder}` : props.label == "Commitment" ? "Amount" : props.label}`}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default Input;
