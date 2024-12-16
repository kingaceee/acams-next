import styles from './Table.module.scss';

interface TableProps {
  ths: string[];
  tds: string[][];
}

export default function Table({ ths, tds }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {ths.map((th, index) => (
					<th key={index}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tds.map((row, rowIndex) => (
				<tr key={rowIndex}>
					{row.map((td, cellIndex) => (
					<td key={cellIndex}>{td}</td>
					))}
				</tr>
        ))}
      </tbody>
    </table>
  );
}