export default {
	fonts: {
		"Cascadia Mono": "Cascadia Mono (Windows Terminals)",
		"Consolas": null,
		"Courier New": null,
		"DejaVu Sans Mono": "DejaVu Sans Mono (Linux Terminals)",
		"Fira Code": null,
		"JetBrains Mono": null,
		"Liberation Mono": "Liberation Mono (Linux Terminals)",
		"Menlo": "Menlo (macOS Terminals)",
		"Monaco": null,
		"Noto Sans Mono": null
	},
	templates: {
		progress: [
			{
				name: 'Classic',
				authors: ["uuf6429"],
				leftChar: '[',
				rightChar: ']',
				progressChar: '=',
				rightProgressChar: '>',
				emptyChar: ' '
			},
			{
				name: 'Block',
				authors: ["uuf6429"],
				leftChar: '[',
				rightChar: ']',
				progressChar: '\u2588',
				rightProgressChar: '',
				emptyChar: ' '
			},
			{
				name: 'Dots',
				authors: ["uuf6429"],
				leftChar: '[',
				rightChar: ']',
				progressChar: '\u25CF',
				rightProgressChar: '',
				emptyChar: '\u25CB'
			},
		],
		spinner: [
			{
				name: "Line",
				authors: ["uuf6429"],
				frames: ["|", "/", "-", "\\"]
			},
			{
				name: "Dot",
				authors: ["uuf6429"],
				frames: ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"]
			},
			{
				name: "Dots",
				authors: ["uuf6429"],
				frames: ["⠋", "⠙", "⠸", "⠴", "⠦", "⠇"]
			},
			{
				name: "Horizontal Bounce (3x1)",
				authors: ["uuf6429"],
				frames: ["●  ", " ● ", "  ●", " ● "]
			},
			{
				name: "Double Helix (5x5)",
				authors: ["uuf6429"],
				frames: [
					"█░░░█\n░█░█░\n░░█░░\n░█░█░\n█░░░█",
					"░█░█░\n█░░░█\n░░█░░\n█░░░█\n░█░█░",
					"░░█░░\n░█░█░\n█░░░█\n░█░█░\n░░█░░",
					"░█░█░\n░░█░░\n█░░░█\n░░█░░\n░█░█░"
				]
			},
			{
				name: "Pulse (5x5)",
				authors: ["uuf6429"],
				frames: [
					"░░░░░\n░░░░░\n░░█░░\n░░░░░\n░░░░░",
					"░░░░░\n░░█░░\n░███░\n░░█░░\n░░░░░",
					"░░█░░\n░███░\n█████\n░███░\n░░█░░",
					"░███░\n█████\n█████\n█████\n░███░",
					"█████\n█████\n█████\n█████\n█████",
					"░███░\n█████\n█████\n█████\n░███░",
					"░░█░░\n░███░\n█████\n░███░\n░░█░░",
					"░░░░░\n░░█░░\n░███░\n░░█░░\n░░░░░",
					"░░░░░\n░░░░░\n░░█░░\n░░░░░\n░░░░░"
				]
			},
			{
				name: "Horizontal Orbit (3x1)",
				authors: ["uuf6429"],
				frames: ["·● ", " ◉ ", " ●·", " ● "]
			}
		],
	}
};
