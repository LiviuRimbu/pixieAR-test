import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type SupportedLocale = 'en' | 'ro'; // Define the valid locales

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as SupportedLocale)) notFound();

    return {
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
