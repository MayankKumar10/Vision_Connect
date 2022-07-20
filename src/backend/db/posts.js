import { v4 as uuid } from "uuid";
import { aadarsh, Abhishek, Ekam, Mayank, Tanya, Tara, Vivek } from "../../assets/images/ProfileImages";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content: "Testing post",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank", 
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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

				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Apr 06 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [
			{
				_id: uuid(),
				firstName: "Mayank",
				lastName: "Kumar",
				username: "Mayank123",
				avatarURL:
					`${Mayank}`,
				text: "janedoe",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
				createdAt: new Date("Apr 07 2021 12:31:25"),
			},
			{
				_id: uuid(),
				firstName: "Abhishek",
				lastName: "Kumar",
				username: "abhishek123",
				avatarURL:
					`${Abhishek}`,
				text: "Wow!",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
				createdAt: new Date("Apr 08 2021 12:31:25"),
			},
		],
	},
	{
		_id: uuid(),
		content: `"There isn’t enough life on this ice cube to fill a space cruiser.”

		- Han Solo, 'Star Wars: The Empire Strikes Back'`,
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
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
			dislikedBy: [],
		},
		username: "Mayank123",
		firstName: "Mayank",
		lastName: "Kumar",
		createdAt: new Date("Feb 23 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Mayank}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“How inappropriate to call this planet "Earth," when it is clearly "Ocean.”
			― Arthur C. Clarke`,
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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

				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Abhishek",
		lastName: "Kumar",
		username: "abhishek123",
		createdAt: new Date("March 13 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Abhishek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Time is an illusion. Lunchtime doubly so.”
			― Douglas Adams, The Hitchhiker's Guide to the Galaxy`,
		likes: {
			likeCount: 3,
			dislikedBy: [],
			likedBy: [
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
				{
					_id: uuid(),
					firstName: "Tanya",
					lastName: "Kapoor",
					username: "Tanya123",
					avatarURL:
						`${Tanya}`,
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
		},
		firstName: "Adarsh",
		lastName: "Balika",
		username: "adarshbalika",
		createdAt: new Date("May 03 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.”
			― Douglas Adams, Mostly Harmless`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
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
			dislikedBy: [],
		},
		firstName: "Tara",
		lastName: "Sutaria",
		username: "Tara123",
		createdAt: new Date("April 18 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tara}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“When religion and politics travel in the same cart, the riders believe nothing can stand in their way. Their movements become headlong - faster and faster and faster. They put aside all thoughts of obstacles and forget the precipice does not show itself to the man in a blind rush until it's too late.”
			― Frank Herbert, Dune`,
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Vivek",
		lastName: "Kaundal",
		username: "Vivek123",
		createdAt: new Date("Jan 01 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Vivek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“How inappropriate to call this planet "Earth," when it is clearly "Ocean.”
			― Arthur C. Clarke`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "ekampreet",
		lastName: "Kaur",
		username: "ekampreet123",
		createdAt: new Date("Dec 15 2020 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Ekam}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Everything's science fiction until someone makes it science fact.”
			― Marie Lu, Warcross`,
		likes: {
			likeCount: 6,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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

				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
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
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("May 12 2022 10:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“He who controls the spice controls the universe.”
			― Frank Herbert, Dune`,
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
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
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Tanya",
		lastName: "Kapoor",
		username: "Tanya123",
		createdAt: new Date("Feb 28 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tanya}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Don't blame you," said Marvin and counted five hundred and ninety-seven thousand million sheep before falling asleep again a second later.”
			― Douglas Adams, The Hitchhiker's Guide to the Galaxy`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
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
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("April 15 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“[Science fiction is] out in the mainstream now. You can tell by the way mainstream literary authors pillage SF while denying they're writing it!”
		― Terry Pratchett`,
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
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
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Tara",
		lastName: "Sutaria",
		username: "Tara123",
		createdAt: new Date("September 15 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tara}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Science fiction films are not about science. They are about disaster, which is one of the oldest subjects of art.”
― Susan Sontag
`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Mayank",
		lastName: "Kumar",
		username: "Mayank123",
		createdAt: new Date("October 09 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Mayank}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“If we can't write diversity into sci-fi, then what's the point? You don't create new worlds to give them all the same limits of the old ones.”
			― Jane Espenson`,
		likes: {
			likeCount: 5,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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

				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Tanya",
		lastName: "Kapoor",
		username: "Tanya123",
		createdAt: new Date("November 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tanya}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“It seems to me, Golan, that the advance of civilization is nothing but an exercise in the limiting of privacy.”
			― Isaac Asimov, Foundation's Edge`,
		likes: {
			likeCount: 4,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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
			dislikedBy: [],
		},
		firstName: "Abhishek",
		lastName: "Kumar",
		username: "abhishek123",
		createdAt: new Date("Jan 19 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Abhishek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“The longest and most destructive party ever held is now into its fourth generation and still no one shows any signs of leaving. Somebody did once look at his watch, but that was eleven years ago now, and there has been no follow up.”
			― Douglas Adams, Life, the Universe and Everything`,
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Vivek",
		lastName: "Kaundal",
		username: "Vivek123",
		createdAt: new Date("December 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Vivek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“I'll make my report as if I told a story, for I was taught as a child on my homeworld that Truth is a matter of the imagination.”
			― Ursula K. LeGuin, The Left Hand of Darkness`,
		likes: {
			likeCount: 4,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
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

				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "ekampreet",
		lastName: "Kaur",
		username: "ekampreet123",
		createdAt: new Date("April 03 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Ekam}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“Science fiction at its best should be crazy and dangerous, not sane and safe.”
			― Paul Di Filippo, How To Write Science Fiction
			`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Feb 05 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“All governments suffer a recurring problem: Power attracts pathological personalities. It is not that power corrupts but that it is magnetic to the corruptible.”
			― Frank Herbert, Chapterhouse: Dune
			`,
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
			],

			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("Feb 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: `“I have been a soreheaded occupant of a file drawer labeled "science fiction" ... and I would like out, particularly since so many serious critics regularly mistake the drawer for a urinal.”
			― Kurt Vonnegut, Wampeters, Foma and Granfalloons`,
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
			],
			dislikedBy: [],
		},

		firstName: "Abhishek",
		lastName: "Kumar",
		username: "abhishek123",
		createdAt: new Date("May 11 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Abhishek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content:
			"maxime placeat facere possimbus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		likes: {
			likeCount: 4,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
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
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Tara",
		lastName: "Sutaria",
		username: "Tara123",
		createdAt: new Date("December 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tara}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Today is a good day",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
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
			dislikedBy: [],
		},
		firstName: "Mayank",
		lastName: "Kumar",
		username: "Mayank123",
		createdAt: new Date("July 23 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Mayank}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Bought my copy of Dune today!",
		likes: {
			likeCount: 3,
			likedBy: [
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
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Vivek",
		lastName: "Kaundal",
		username: "Vivek123",
		createdAt: new Date("November 02 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Vivek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "The answer to Life, Universe and everything is 42",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("July 18 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Just read Kurt Vonnegaut's Slaughter House 5 and it's amazing!",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},

				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "ekampreet",
		lastName: "Kaur",
		username: "ekampreet123",
		createdAt: new Date("September 07 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Ekam}`,
		comments: [],
	},
	{
		_id: uuid(),
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, commodi?",
		likes: {
			likeCount: 5,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
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
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
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
			dislikedBy: [],
		},
		firstName: "Abhishek",
		lastName: "Kumar",
		username: "abhishek123",
		createdAt: new Date("March 04 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Abhishek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Lorem ipsum dolor sit amet.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
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
			dislikedBy: [],
		},
		firstName: "Tanya",
		lastName: "Kapoor",
		username: "Tanya123",
		createdAt: new Date("December 17 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tanya}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Should I watch Star wars?",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Tara",
		lastName: "Sutaria",
		username: "Tara123",
		createdAt: new Date("March 27 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tara}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Has anyone read The Three body problem trilogy?",
		likes: {
			likeCount: 1,
			likedBy: [
				{
					firstName: "Tara",
					lastName: "Sutaria",
					username: "Tara123",
					avatarURL:
						`${Tara}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Vivek",
		lastName: "Kaundal",
		username: "Vivek123",
		createdAt: new Date("April 22 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Vivek}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Hello",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Vivek",
					lastName: "Kaundal",
					username: "Vivek123",
					avatarURL:
						`${Vivek}`,
				},
				{
					firstName: "Adarsh",
					lastName: "Balika",
					username: "adarshbalika",
					avatarURL:
						`${aadarsh}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "Mayank",
		lastName: "Kumar",
		username: "Mayank123",
		createdAt: new Date("November 14 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Mayank}`,
		comments: [],
	},
	{
		_id: uuid(),
		content: "Testing this new app",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
				},
			],
			dislikedBy: [],
		},
		firstName: "ekampreet",
		lastName: "Kaur",
		username: "ekampreet123",
		createdAt: new Date("Jan 27 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Ekam}`,
		comments: [],
	},
	{
		_id: uuid(),
		content:
			"similique sunt in culpa qui officia deserunt mollitia animi, id est laborum e",
		likes: {
			likeCount: 3,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Mayank",
					lastName: "Kumar",
					username: "Mayank123",
					avatarURL:
						`${Mayank}`,
				},
				{
					firstName: "Abhishek",
					lastName: "Kumar",
					username: "abhishek123",
					avatarURL:
						`${Abhishek}`,
				},
				{
					firstName: "ekampreet",
					lastName: "Kaur",
					username: "ekampreet123",
					avatarURL:
						`${Ekam}`,
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstName: "Adarsh",
		lastName: "Balika",
		createdAt: new Date("December 12 2021 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${aadarsh}`,
		comments: [],
	},
	{
		_id: uuid(),
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non veritatis debitis repudiandae adipisci sed eos.",
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: [],
		},
		firstName: "Tanya",
		lastName: "Kapoor",
		username: "Tanya123",
		createdAt: new Date("March 09 2022 12:31:25"),
		updatedAt: formatDate(),
		avatarURL:
			`${Tanya}`,
		comments: [],
	},
];
