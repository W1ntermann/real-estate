export default function Loading() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          border: "2px solid #262626",
          borderTopColor: "#fff",
          borderRadius: "50%",
          animation: "shimmer 1s ease-in-out infinite",
        }}
      />
    </div>
  );
}