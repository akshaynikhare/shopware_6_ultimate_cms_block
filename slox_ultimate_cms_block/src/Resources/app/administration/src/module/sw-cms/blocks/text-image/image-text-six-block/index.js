import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-six-block',
    label: 'sw-cms.blocks.imageText.imageTextsixSlot.label',
    category: 'text-image',
    component: 'sw-cms-block-image-text-six-block',
    previewComponent: 'sw-cms-preview-image-text-six-block',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'one-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_small.jpg'
                    }
                }
            }
        },
        'one-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `<h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>`.trim()
                    }
                }
            }
        },
        'two-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_glasses_small.jpg'
                    }
                }
            }
        },
        'two-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>
                        `.trim()
                    }
                }
            }
        },
        'three-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_small.jpg'
                    }
                }
            }
        },
        'three-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>
                        `.trim()
                    }
                }
            }
        },
        'four-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_glasses_small.jpg'
                    }
                }
            }
        },
        'four-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>
                        `.trim()
                    }
                }
            }
        },
        'five-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_camera_small.jpg'
                    }
                }
            }
        },
        'five-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>
                        `.trim()
                    }
                }
            }
        },
        'six-image': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                },
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_small.jpg'
                    }
                }
            }
        },
        'six-text': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2><p style="text-align: center;">Lorem ipsum dolor sit amet</p>
                        `.trim()
                    }
                }
            }
        }
    }
});