export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h2>Inner ka inner Item</h2>
            {children}
        </>
    );
}
