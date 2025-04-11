import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const OWNER = 'RubenErhardt';
const REPO = 'Cosmetique-Totale-Stage';
const PAGE = 'Learning-Journal---Notes---Stage-Cosmetique‐Totale';

function WikiPage() {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(null);

  const fetchWiki = async () => {
    const url = `https://raw.githubusercontent.com/wiki/${OWNER}/${REPO}/${PAGE}.md`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const text = await res.text();
      setMarkdown(text);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWiki();
  }, []);

  return (
    <div className="wiki-container">
      <h2>📘 Wiki Pagina</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && !markdown && <p>Bezig met laden...</p>}
      {markdown && <ReactMarkdown>{markdown}</ReactMarkdown>}
    </div>
  );
}

export default WikiPage;
