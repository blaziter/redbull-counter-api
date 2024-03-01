const defaultLineTemplate = (file) => `export * from '${file}';`;
const fileTemplate = (files, lineTemplate = defaultLineTemplate) =>
    `${files.map((file) => lineTemplate(file)).join('\n')}\n`;

/**
 * BarrelGun configuration file
 * @see https://www.npmjs.com/package/barrelgun
/** @type {Array<import("barrelgun").BarrelgunConfigBarrel>} */
const barrels = [
    {
        path: 'src/**/*/index.ts',
        files: ['*.ts'],
        fileTemplate: fileTemplate,
    },
];

module.exports = { barrels };
