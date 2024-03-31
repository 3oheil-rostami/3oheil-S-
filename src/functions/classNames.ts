export default function classNames(
	baseClass: string,
	conditions: { [key: string]: boolean }
): string {
	let result = baseClass;
	for (const key in conditions) {
		if (conditions[key]) {
			result += ` ${key}`;
		}
	}
	return result;
}
