import React from 'react';

interface InstructionSnippetProps {
    logo: string;
    provider: string;
    links: { label: string; url: string; queryParams?: string }[];
}

export default function InstructionSnippet({ logo, provider, links }: InstructionSnippetProps) {
    return (
        <div className="flex flex-row gap-5">
            <img src={logo} alt={`${provider} Logo`} className="block max-w-[163px]" />
            <div className="flex flex-grow">
                <p className="border-l-2 border-[#ff66cc] pl-4">
                    {links.map((link, index) => (
                        <span key={index}>
                            <b>{link.label}:</b> <a href={link.queryParams ? `${link.url}?${link.queryParams}` : `${link.url}?utm_campaign=extension-os`} target="_blank" rel="noopener noreferrer">{link.url}</a> <br />
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}