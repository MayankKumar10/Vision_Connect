import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {profileImg, steve} from "../../assets/images";
import {aadarsh, Abhishek, Ekam, Mayank, Tanya, Tara, Vivek} from '../../assets/images/ProfileImages'

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		email: "adarshbalika@gmail.com",
		password: "adarshBalika123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:`${aadarsh}`,
		backgroundURL:`${profileImg}`,
		DOB:'4 jan',
		Location: 'New Delhi',
		Joined:'June 2010',
		following: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
			},
			{
				_id: uuid(),
				firstName: "Vivek",
				lastName: "Kaundal",
				username: "Vivek123",
				avatarURL:
					`${Vivek}`,
			},
			{
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
			},
			{
				firstName: "Tara",
				lastName: "Sutaria",
				username: "Tara123",
				avatarURL:
					`${Tara}`,
			},
		],
		followers: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
			},

			{
				_id: uuid(),
				firstName: "Vivek",
				lastName: "Kaundal",
				username: "Vivek123",
				avatarURL:
					`${Vivek}`,
			},
		],
		bookmarks: [],
		bio: "I am the first user",
		portfolio: "https://adarshbalika.netlify.app/",
	},
	/*****************************************2*******************************************/
	{
		_id: uuid(),
    firstName: "Mayank",
    lastName: "Kumar",
    username: "Mayank123",
    password: "Mayank@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "mayank@gmail.com",
		avatarURL:
			`${Mayank}`,
		backgroundURL:`${profileImg}` ,
		DOB:'4 jan',
		Location: 'delhi',
		Joined:'June 2010',
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
			{
				firstName: "ekampreet",
				lastName: "Kaur",
				username: "ekampreet123",
				avatarURL:
					`${Ekam}`,
			},
			{
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
			},
			
		],
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
			{
				firstName: "ekampreet",
				lastName: "Kaur",
				username: "ekampreet123",
				avatarURL:
					`${Ekam}`,
			},
			{
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
			},
		],
		bookmarks: [],
		bio: "I am the second user",
		portfolio: "https://www.google.co.in/",
	},
	/*******************************3*********************************/
	{
		_id: uuid(),
		firstName: "Abhishek",
		lastName: "Kumar",
		username: "abhishek123",
		password: "abhishek123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "abhishek@gmail.com",
		avatarURL:
			`${Abhishek}`,
			backgroundURL:`${profileImg}` ,
			DOB:'20 sep',
			Location: 'delhi',
			Joined:'June 2010',
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
			{
				_id: uuid(),
				firstName: "Vivek",
				lastName: "Kaundal",
				username: "Vivek123",
				avatarURL:
					`${Vivek}`,
			},
		],
		following: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
			},
			{
				_id: uuid(),
				firstName: "Tanya",
				lastName: "Kapoor",
				username: "Tanya123",
				avatarURL:
					`${Tanya}`,
			},
		],
		bookmarks: [],
		bio: "I am third user",
		portfolio: "https://www.google.co.in/",
	},
	/**********************************************4*************************************************/
	{
		_id: uuid(),
		firstName: "Vivek",
		lastName: "Kaundal",
		username: "Vivek123",
		password: "Vivek123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			`${Vivek}`,
			backgroundURL:`${profileImg}` ,
			DOB:'4 May',
			Location: 'delhi',
			Joined:'June 2014',
		email: "vivek@gmail.com",
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
			{
				firstName: "Tara",
				lastName: "Sutaria",
				username: "Tara123",
				avatarURL:
					`${Tara}`,
			},
		],
		following: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
			{
				firstName: "Tara",
				lastName: "Sutaria",
				username: "Tara123",
				avatarURL:
					`${Tara}`,
			},
			{
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
			},
		],
		bookmarks: [],
		bio: "I am fourth user",
		portfolio: "https://www.google.co.in/",
	},
	/**************************************************5**************************************************/
	{
		_id: uuid(),
		firstName: "Tara",
		lastName: "Sutaria",
		username: "Tara123",
		password: "Tara123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		backgroundURL:`${profileImg}` ,
		DOB:'19 nov',
		Location: 'delhi',
		Joined:'June 2015',
		avatarURL:
			`${Tara}`,
		email: "tara@gmail.com",
		following: [
			{
				_id: uuid(),
				firstName: "Vivek",
				lastName: "Kaundal",
				username: "Vivek123",
				avatarURL:
					`${Vivek}`,
			},
		],
		followers: [
			{
				firstName: "Adarsh",
				lastName: "Balika",
				username: "adarshbalika",
				avatarURL:`${aadarsh}`,
			},
		],
		bookmarks: [],
		bio: "I am fifth user",
		portfolio: "https://www.google.co.in/",
	},
	/*******************************************6*******************************************/
	{
		_id: uuid(),
		firstName: "ekampreet",
		lastName: "Kaur",
		username: "ekampreet123",
		password: "ekampreet123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			`${Ekam}`,
			backgroundURL:`${profileImg}` ,
			DOB:'4 july',
			Location: 'delhi',
			Joined:'June 2018',
		email: "ekampreet@gmail.com",
		followers: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
			},
		],
		following: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
			},
		],
		bookmarks: [],
		bio: "I am sixth user",
		portfolio: "https://www.google.co.in/",
	},
	/*********************************************7*****************************************/
	{
		_id: uuid(),
		firstName: "Tanya",
		lastName: "Kapoor",
		username: "Tanya123",
		password: "Tanya123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		email: "Tanya@gmail.com",
		avatarURL:
			`${Tanya}`,
			backgroundURL:`${profileImg}` ,
			DOB:'4 jan',
			Location: 'delhi',
			Joined:'June 2010',
		followers: [
			{
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
			},
		],
		following: [],
		bookmarks: [],
		bio: "I am seventh user",
		portfolio: "https://www.google.co.in/",
	},
];
