// This component is non-SSR. Intl only works client side.

interface LastClickedTextProps {
  loading: boolean,
  date: null | string,
};

const LastClickedText = ({ loading = false, date }: LastClickedTextProps) => {
  const classes = [
    'mb-3',
    'font-mono',
    'transition-all',
    'ease-in-out',
    loading && 'translate-y-3 opacity-0',
  ].join(' ');

  let formattedDate: null | string = null;

  if (date) {
    const { locale, timeZone } = Intl.DateTimeFormat().resolvedOptions();

    const formattedDateObj = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      fractionalSecondDigits: 3,
      hour12: false,
      timeZone,
    });

    formattedDate = formattedDateObj.format(new Date(date));
  }

  return (
    <p className={classes}>
      Last clicked: { formattedDate || 'Never :(' }
    </p>
  );
};

export default LastClickedText;
