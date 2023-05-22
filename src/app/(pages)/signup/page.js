'use client'
import { useState } from "react";
import discord from "../../../images/icon/discord1.png";
import wallet from "../../../images/icon//wallet.png";
import leftarrow from "../../../images/icon/leftarrow.png";
import checkboxChecked from "../../../images/icon//checkboxChecked.png";
import checkbox from "../../../images/icon/checkbox.png";
import signupLeft from "../../../images/signupLeft.png";
import signupRight from "../../../images/signupRight.png";
import onboardLogo from "@/images/onboardLogo.png";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/components/buttons/buttonPrimary/ButtonPrimary";
import InvertButton from "@/components/buttons/invertButton/InvertButton";
import Input from "@/components/common/input";
import FloatingLabelInput from "@/components/common/floatingLabelInput";

const page = () => {
	const [agree, setAgree] = useState(false);
	const [notify, setNotify] = useState(false);
	const [hoverBack, setHoverBack] = useState('#BCBCBD');
	const [hoveredBtn, setHoveredBtn] = useState("")
	const [email, setEmail] = useState("")
	const [pswd, setPswd] = useState("")
	const [cPswd, setCPswd] = useState("")
	const [emailerr, setEmailerr] = useState("");
	const [pswderr, setPswderr] = useState("");
	const [cPswderr, setCPswderr] = useState("");

	let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	return (
		<div className="signupBgImage">
			<div className="flex justify-center relative lg:justify-between flex-wrap gap-7 px-8">
				<div className="mt-8">
					<div className="flex absolute"
						style={{ zIndex: 2 }}
					>
						<ButtonPrimary
							onClick={() => { window.location.replace('/') }}
							className={' h-6  pl-0 pr-0 rounded-none !bg-transparent border-0'}
							onMouseEnter={() => { setHoverBack('#ff7246') }}
							onMouseLeave={() => { setHoverBack('#BCBCBD') }}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
								<path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM16 7L0.999999 7V9L16 9V7Z" fill={hoverBack} />
							</svg>
							BACK TO ARTYFACT
						</ButtonPrimary>
						<Image src={onboardLogo} alt='onboardLogo' className='ml-36 mt-3' />
					</div>
					<div className="absolute top-0">
						<Image src={signupLeft} alt='signupLeft'
							className="absolute top-[202px]"
						/>
						<Image src={signupRight} alt='signupRight'
							className="relative top-[70px] left-60"
							style={{ zIndex: 1 }}
						/>
					</div>
				</div>
				<div className="mt-6 lg:mr-7"
					style={{ zIndex: 1 }}
				>
					<div className="Starzone flex h-14 items-center ml-[136px] gap-[25px] ">
						<div className="primaryBg rounded-2xl p-[2px]">
							<div className="!text-base text-white bg-[#0b0c0c] rounded-2xl px-4 py-2">
								SIGN UP
							</div>
						</div>

						<Link href={"/login"}>
							<div className="text-[#8B8B8B] !text-base launchSelectTabTwo px-4 py-2">
								LOG IN
							</div>
						</Link>
					</div>
					<div className={`w-full md:w-[502px] signupBgOne h-[560px] p-10 mt-10`}>
						<p className="text-lg text-[#8B8B8B] ">
							Fill your information to continue with Artyfact
						</p>
						<FloatingLabelInput
							error={emailerr.length > 0 ? true : false}
							onChange={(e) => {
								if (regEmail.test(e.target.value) == false) {
									setEmailerr("*Invalid Email address");
								} else {
									setEmailerr("");
								}
								setEmail(e.target.value);
							}}
							value={email}
							id={"email"}
							label="Email"
							type="email"
						/>
						<FloatingLabelInput
							error={pswderr.length > 0 ? true : false}
							onChange={(e) => {
								if (regPassword.test(e.target.value) == false) {
									setPswderr("*Invalid Password");
								} else {
									setPswderr("");
								}
								setPswd(e.target.value);
							}}
							value={pswd}
							id={"pswd"}
							label="Enter Password"
							type="password"
						/>
						<FloatingLabelInput
							error={cPswderr.length > 0 ? true : false}
							onChange={(e) => {
								if (regPassword.test(e.target.value) == false) {
									setCPswderr("*Invalid Confirm Password");
								} else {
									setCPswderr("");
								}
								setCPswd(e.target.value);
							}}
							value={cPswd}
							id={"cPswd"}
							label="Reenter Password"
							type="password"
						/>

						<div className="flex gap-4 items-start mt-8">
							{agree ? (
								<Image
									src={checkboxChecked}
									alt="checkboxChecked"
									onClick={() => {
										setAgree(false);
									}}
								/>
							) : (
								<Image
									src={checkbox}
									alt="checkbox"
									onClick={() => {
										setAgree(true);
									}}
								/>
							)}
							<p className="text-[#8B8B8B]">
								I have read and agree to the Artyfact{" "}
								<span className="text-[#F3BA2F]">Terms of Use</span> and{" "}
								<span className="text-[#F3BA2F]">Privacy Policy</span>.
							</p>
						</div>
						<div className="flex gap-4 items-start mt-5">
							{notify ? (
								<Image
									src={checkboxChecked}
									alt="checkboxChecked"
									onClick={() => {
										setNotify(false);
									}}
								/>
							) : (
								<Image
									src={checkbox}
									alt="checkbox"
									onClick={() => {
										setNotify(true);
									}}
								/>
							)}
							<p className="text-[#8B8B8B]">
								I agree to receive campaigns, periodic updates, and events
								from Artyfact.
							</p>
						</div>

						<ButtonPrimary className={'Starzone mt-8 primaryBg font-normal text-base py-1 w-full'}>
							SIGNUP
						</ButtonPrimary>
					</div>
					<div
						className={`p-10 w-[502px] h-[131px] flex flex-col justify-center items-center gap-4 text-white walletDiscordSignup my-5`}
					>
						<div className="text-base">YOU CAN ALSO SIGN UP WITH</div>
						<div className="flex justify-between gap-4">
							<InvertButton
								className={'font-normal'}
								onMouseOver={() => { setHoveredBtn("wallet") }}
								onMouseOut={() => { setHoveredBtn("") }}
							>
								{hoveredBtn == "wallet" ?
									<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.7838 9.65096C11.3601 9.65096 11.8273 9.17229 11.8273 8.58183C11.8273 7.99136 11.3601 7.5127 10.7838 7.5127C10.2074 7.5127 9.74023 7.99136 9.74023 8.58183C9.74023 9.17229 10.2074 9.65096 10.7838 9.65096Z" fill="#F8A932" />
										<path d="M12.5762 2.89737V2.04338C12.5762 1.60786 12.4104 1.1898 12.1145 0.879528C11.8186 0.569252 11.4164 0.391665 10.9948 0.385132H2.62762C0.267578 0.385132 0.0294336 2.38332 0 3.39208V3.42525V12.2692C0 12.709 0.169147 13.1308 0.470231 13.4418C0.771314 13.7528 1.17967 13.9275 1.60547 13.9275H12.3086C12.7344 13.9275 13.1427 13.7528 13.4438 13.4418C13.7449 13.1308 13.9141 12.709 13.9141 12.2692V4.53074C13.9137 4.13916 13.7791 3.76034 13.5343 3.46139C13.2894 3.16244 12.95 2.96264 12.5762 2.89737ZM2.62762 1.49063H10.9948C11.1325 1.49704 11.2625 1.55809 11.3577 1.66106C11.4529 1.76404 11.506 1.90099 11.5059 2.04338V2.8725H1.11848C1.25494 1.86926 1.69912 1.49063 2.62762 1.49063ZM12.8437 12.2692C12.8437 12.4158 12.7874 12.5564 12.687 12.6601C12.5866 12.7637 12.4505 12.822 12.3086 12.822H1.60547C1.46354 12.822 1.32742 12.7637 1.22706 12.6601C1.12669 12.5564 1.07031 12.4158 1.07031 12.2692V3.978H12.3086C12.4505 3.978 12.5866 4.03623 12.687 4.13989C12.7874 4.24355 12.8437 4.38415 12.8437 4.53074V12.2692Z" fill="#F8A932" />
									</svg>
									:
									<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.7838 9.65096C11.3601 9.65096 11.8273 9.17229 11.8273 8.58183C11.8273 7.99136 11.3601 7.5127 10.7838 7.5127C10.2074 7.5127 9.74023 7.99136 9.74023 8.58183C9.74023 9.17229 10.2074 9.65096 10.7838 9.65096Z" fill="#8B8B8B" />
										<path d="M12.5762 2.89737V2.04338C12.5762 1.60786 12.4104 1.1898 12.1145 0.879528C11.8186 0.569252 11.4164 0.391665 10.9948 0.385132H2.62762C0.267578 0.385132 0.0294336 2.38332 0 3.39208V3.42525V12.2692C0 12.709 0.169147 13.1308 0.470231 13.4418C0.771314 13.7528 1.17967 13.9275 1.60547 13.9275H12.3086C12.7344 13.9275 13.1427 13.7528 13.4438 13.4418C13.7449 13.1308 13.9141 12.709 13.9141 12.2692V4.53074C13.9137 4.13916 13.7791 3.76034 13.5343 3.46139C13.2894 3.16244 12.95 2.96264 12.5762 2.89737ZM2.62762 1.49063H10.9948C11.1325 1.49704 11.2625 1.55809 11.3577 1.66106C11.4529 1.76404 11.506 1.90099 11.5059 2.04338V2.8725H1.11848C1.25494 1.86926 1.69912 1.49063 2.62762 1.49063ZM12.8437 12.2692C12.8437 12.4158 12.7874 12.5564 12.687 12.6601C12.5866 12.7637 12.4505 12.822 12.3086 12.822H1.60547C1.46354 12.822 1.32742 12.7637 1.22706 12.6601C1.12669 12.5564 1.07031 12.4158 1.07031 12.2692V3.978H12.3086C12.4505 3.978 12.5866 4.03623 12.687 4.13989C12.7874 4.24355 12.8437 4.38415 12.8437 4.53074V12.2692Z" fill="#8B8B8B" />
									</svg>
								}

								Wallet
							</InvertButton>
							<InvertButton
								className={'font-normal'}
								onMouseOver={() => { setHoveredBtn("discord") }}
								onMouseOut={() => { setHoveredBtn("") }}
							>
								{hoveredBtn == "discord" ?
									<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.09203 10.5998C4.35996 10.9321 1.84162 9.74553 1.15055 9.17071C0.963137 8.27948 2.42728 2.85827 3.42876 1.95649C4.43024 1.05471 6.52689 1.05471 6.52689 1.05471C6.68222 1.05471 6.83119 0.99915 6.94102 0.900252C7.05085 0.801353 7.11255 0.667219 7.11255 0.527355C7.11255 0.387492 7.05085 0.253357 6.94102 0.154459C6.83119 0.0555603 6.68222 0 6.52689 0C6.42148 0 3.92657 0 2.59712 1.20764C1.5078 2.1938 -0.758699 8.94922 0.25449 9.86682C0.746443 10.3045 3.12422 11.702 4.79334 11.702C5.07865 11.709 5.36171 11.6548 5.61912 11.5438C5.75706 11.4806 5.8616 11.3708 5.90988 11.2384C5.95817 11.1059 5.94628 10.9617 5.87681 10.8372C5.80764 10.712 5.68612 10.6167 5.53897 10.5722C5.39181 10.5277 5.23106 10.5377 5.09203 10.5998Z" fill="#F8A932" />
										<path d="M13.9705 1.20764C12.6411 0.0158206 10.1462 0 10.0407 0C9.88541 0 9.73645 0.0555603 9.62661 0.154459C9.51678 0.253357 9.45508 0.387492 9.45508 0.527355C9.45508 0.667219 9.51678 0.801353 9.62661 0.900252C9.73645 0.99915 9.88541 1.05471 10.0407 1.05471C10.6264 1.05471 12.3189 1.21819 13.1389 1.95649C14.1403 2.85827 15.6045 8.28475 15.4171 9.17071C14.726 9.74553 12.2077 10.9321 11.4756 10.5998C11.3366 10.5377 11.1758 10.5277 11.0287 10.5722C10.8815 10.6167 10.76 10.712 10.6908 10.8372C10.6214 10.9617 10.6095 11.1059 10.6577 11.2384C10.706 11.3708 10.8106 11.4806 10.9485 11.5438C11.2059 11.6548 11.489 11.709 11.7743 11.702C13.4434 11.702 15.8212 10.3045 16.3131 9.86682C17.3263 8.94922 15.0598 2.1938 13.9705 1.20764Z" fill="#F8A932" />
										<path d="M5.94085 7.77849C6.58775 7.77849 7.11217 7.24726 7.11217 6.59194C7.11217 5.93663 6.58775 5.4054 5.94085 5.4054C5.29395 5.4054 4.76953 5.93663 4.76953 6.59194C4.76953 7.24726 5.29395 7.77849 5.94085 7.77849Z" fill="#F8A932" />
										<path d="M10.6264 7.77849C11.2733 7.77849 11.7977 7.24726 11.7977 6.59194C11.7977 5.93663 11.2733 5.4054 10.6264 5.4054C9.97949 5.4054 9.45508 5.93663 9.45508 6.59194C9.45508 7.24726 9.97949 7.77849 10.6264 7.77849Z" fill="#F8A932" />
										<path d="M12.9689 3.69145C13.0684 3.69163 13.1664 3.66896 13.2535 3.62559C13.3406 3.58223 13.414 3.51959 13.4667 3.44359C13.5076 3.38476 13.5352 3.31924 13.5479 3.25078C13.5606 3.18233 13.5582 3.11229 13.5408 3.04468C13.5234 2.97707 13.4913 2.91322 13.4465 2.85679C13.4016 2.80036 13.3448 2.75246 13.2793 2.71584C8.34221 -0.0633229 3.49296 2.59982 3.28797 2.71584C3.2226 2.75254 3.1659 2.80048 3.1211 2.85692C3.0763 2.91336 3.04429 2.97719 3.02688 3.04476C2.99174 3.18124 3.01824 3.32471 3.10056 3.44359C3.18289 3.56247 3.31429 3.64704 3.46585 3.67869C3.61742 3.71034 3.77675 3.68647 3.90877 3.61234C4.08447 3.51215 8.34807 1.18651 12.6585 3.61234C12.7517 3.66436 12.8593 3.69176 12.9689 3.69145Z" fill="#F8A932" />
										<path d="M12.4357 9.71389C12.4658 9.76998 12.5053 9.82156 12.5528 9.86682C12.6072 9.91625 12.672 9.95548 12.7434 9.98225C12.8148 10.009 12.8913 10.0228 12.9686 10.0228C13.0459 10.0228 13.1225 10.009 13.1938 9.98225C13.2652 9.95548 13.33 9.91625 13.3844 9.86682C13.8273 9.49324 14.0972 8.98279 14.1399 8.43769C14.1402 8.33885 14.1095 8.24195 14.0515 8.15803C13.9935 8.07411 13.9105 8.00656 13.812 7.96307C13.7137 7.92012 13.604 7.90279 13.4953 7.91305C13.3866 7.9233 13.2833 7.96072 13.197 8.02108C11.8108 9.03634 10.0699 9.57632 8.28335 9.54513C6.50091 9.56781 4.76615 9.0266 3.38138 8.0158C3.29334 7.95422 3.1876 7.91654 3.07659 7.9072C2.96558 7.89785 2.85392 7.91724 2.75473 7.96307C2.65616 8.00656 2.57315 8.07411 2.51516 8.15803C2.45717 8.24195 2.42654 8.33885 2.42676 8.43769C2.46951 8.98279 2.73935 9.49324 3.18226 9.86682C3.2367 9.91625 3.30148 9.95548 3.37285 9.98225C3.44421 10.009 3.52076 10.0228 3.59808 10.0228C3.67539 10.0228 3.75194 10.009 3.82331 9.98225C3.89467 9.95548 3.95945 9.91625 4.01389 9.86682C4.06143 9.82156 4.10094 9.76998 4.13103 9.71389C5.34804 10.2969 6.70571 10.6011 8.08422 10.5998H8.48247C9.86098 10.6011 11.2187 10.2969 12.4357 9.71389Z" fill="#F8A932" />
									</svg>
									:
									<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.09203 10.5998C4.35996 10.9321 1.84162 9.74553 1.15055 9.17071C0.963137 8.27948 2.42728 2.85827 3.42876 1.95649C4.43024 1.05471 6.52689 1.05471 6.52689 1.05471C6.68222 1.05471 6.83119 0.99915 6.94102 0.900252C7.05085 0.801353 7.11255 0.667219 7.11255 0.527355C7.11255 0.387492 7.05085 0.253357 6.94102 0.154459C6.83119 0.0555603 6.68222 0 6.52689 0C6.42148 0 3.92657 0 2.59712 1.20764C1.5078 2.1938 -0.758699 8.94922 0.25449 9.86682C0.746443 10.3045 3.12422 11.702 4.79334 11.702C5.07865 11.709 5.36171 11.6548 5.61912 11.5438C5.75706 11.4806 5.8616 11.3708 5.90988 11.2384C5.95817 11.1059 5.94628 10.9617 5.87681 10.8372C5.80764 10.712 5.68612 10.6167 5.53897 10.5722C5.39181 10.5277 5.23106 10.5377 5.09203 10.5998Z" fill="#8B8B8B" />
										<path d="M13.9705 1.20764C12.6411 0.0158206 10.1462 0 10.0407 0C9.88541 0 9.73645 0.0555603 9.62661 0.154459C9.51678 0.253357 9.45508 0.387492 9.45508 0.527355C9.45508 0.667219 9.51678 0.801353 9.62661 0.900252C9.73645 0.99915 9.88541 1.05471 10.0407 1.05471C10.6264 1.05471 12.3189 1.21819 13.1389 1.95649C14.1403 2.85827 15.6045 8.28475 15.4171 9.17071C14.726 9.74553 12.2077 10.9321 11.4756 10.5998C11.3366 10.5377 11.1758 10.5277 11.0287 10.5722C10.8815 10.6167 10.76 10.712 10.6908 10.8372C10.6214 10.9617 10.6095 11.1059 10.6577 11.2384C10.706 11.3708 10.8106 11.4806 10.9485 11.5438C11.2059 11.6548 11.489 11.709 11.7743 11.702C13.4434 11.702 15.8212 10.3045 16.3131 9.86682C17.3263 8.94922 15.0598 2.1938 13.9705 1.20764Z" fill="#8B8B8B" />
										<path d="M5.94085 7.77849C6.58775 7.77849 7.11217 7.24726 7.11217 6.59194C7.11217 5.93663 6.58775 5.4054 5.94085 5.4054C5.29395 5.4054 4.76953 5.93663 4.76953 6.59194C4.76953 7.24726 5.29395 7.77849 5.94085 7.77849Z" fill="#8B8B8B" />
										<path d="M10.6264 7.77849C11.2733 7.77849 11.7977 7.24726 11.7977 6.59194C11.7977 5.93663 11.2733 5.4054 10.6264 5.4054C9.97949 5.4054 9.45508 5.93663 9.45508 6.59194C9.45508 7.24726 9.97949 7.77849 10.6264 7.77849Z" fill="#8B8B8B" />
										<path d="M12.9689 3.69145C13.0684 3.69163 13.1664 3.66896 13.2535 3.62559C13.3406 3.58223 13.414 3.51959 13.4667 3.44359C13.5076 3.38476 13.5352 3.31924 13.5479 3.25078C13.5606 3.18233 13.5582 3.11229 13.5408 3.04468C13.5234 2.97707 13.4913 2.91322 13.4465 2.85679C13.4016 2.80036 13.3448 2.75246 13.2793 2.71584C8.34221 -0.0633229 3.49296 2.59982 3.28797 2.71584C3.2226 2.75254 3.1659 2.80048 3.1211 2.85692C3.0763 2.91336 3.04429 2.97719 3.02688 3.04476C2.99174 3.18124 3.01824 3.32471 3.10056 3.44359C3.18289 3.56247 3.31429 3.64704 3.46585 3.67869C3.61742 3.71034 3.77675 3.68647 3.90877 3.61234C4.08447 3.51215 8.34807 1.18651 12.6585 3.61234C12.7517 3.66436 12.8593 3.69176 12.9689 3.69145Z" fill="#8B8B8B" />
										<path d="M12.4357 9.71389C12.4658 9.76998 12.5053 9.82156 12.5528 9.86682C12.6072 9.91625 12.672 9.95548 12.7434 9.98225C12.8148 10.009 12.8913 10.0228 12.9686 10.0228C13.0459 10.0228 13.1225 10.009 13.1938 9.98225C13.2652 9.95548 13.33 9.91625 13.3844 9.86682C13.8273 9.49324 14.0972 8.98279 14.1399 8.43769C14.1402 8.33885 14.1095 8.24195 14.0515 8.15803C13.9935 8.07411 13.9105 8.00656 13.812 7.96307C13.7137 7.92012 13.604 7.90279 13.4953 7.91305C13.3866 7.9233 13.2833 7.96072 13.197 8.02108C11.8108 9.03634 10.0699 9.57632 8.28335 9.54513C6.50091 9.56781 4.76615 9.0266 3.38138 8.0158C3.29334 7.95422 3.1876 7.91654 3.07659 7.9072C2.96558 7.89785 2.85392 7.91724 2.75473 7.96307C2.65616 8.00656 2.57315 8.07411 2.51516 8.15803C2.45717 8.24195 2.42654 8.33885 2.42676 8.43769C2.46951 8.98279 2.73935 9.49324 3.18226 9.86682C3.2367 9.91625 3.30148 9.95548 3.37285 9.98225C3.44421 10.009 3.52076 10.0228 3.59808 10.0228C3.67539 10.0228 3.75194 10.009 3.82331 9.98225C3.89467 9.95548 3.95945 9.91625 4.01389 9.86682C4.06143 9.82156 4.10094 9.76998 4.13103 9.71389C5.34804 10.2969 6.70571 10.6011 8.08422 10.5998H8.48247C9.86098 10.6011 11.2187 10.2969 12.4357 9.71389Z" fill="#8B8B8B" />
									</svg>
								}

								Discord
							</InvertButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
