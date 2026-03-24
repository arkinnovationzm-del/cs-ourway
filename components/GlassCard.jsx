import classNames from 'classnames';

export default function GlassCard({ title, children }) {
  return (
    <div className={classNames(
      "p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-cardGlow"
    )}>
      <h3 className="mb-3 font-bold">{title}</h3>
      {children}
    </div>
  );
}