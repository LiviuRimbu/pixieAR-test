import {useRouter, usePathname} from 'next/navigation';

export function useIdAndLocales() {
	const router = useRouter();
	const currentPath = usePathname();

	const currentLocale = currentPath.split('/')[1] || 'en';

	const idMatch = currentPath.match(/id=(\d+)/);
	const id = idMatch ? idMatch[1] : null;

	return { id, currentLocale, router };
}
