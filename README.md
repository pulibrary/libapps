# LibApps

Front-end customizations for vendor-hosted library applications.

## Libguides

### Testing libguides CSS/JS changes in the testing group

To test libguides changes in a staging-like environment, you will want to use the Testing group.

#### Copying guides into the testing group

If there's a particular guide you'd like to use as an example, make a copy of it in the testing group:
1. In the Libguides admin interface, go to Content > Guides > [Create Guide Button](https://princeton.libapps.com/libguides/create_guide.php)
1. Under "Choose layout or reuse", select "Copy content/layout from an existing guide".
1. Choose the original guide you'd like to copy.
1. Check "Copy Assets" if you will be modifying any of the assets
1. Under "Guide Name", type a name that describes your current work.
1. Under "Group Assignment", select "Testing".
1. Press the "Create Guide" button.


#### Testing a change to a widget

If you'd like to change the CSS or JS that is referenced in a specific widget:

1. Go to Admin > Look & Feel > [Custom JS/CSS tab](https://princeton.libapps.com/libguides/lookfeel.php?action=1).
1. Upload new versions of your CSS and/or JS files, being sure that they have a different name than the originals.
1. Create a new widget (also called Media/Widget) in a guide within the testing group.
1. In the Embed Code field, reference the new versions of the files.
1. If the testing is successful, go back to the [Custom JS/CSS tab](https://princeton.libapps.com/libguides/lookfeel.php?action=1).
1. Overwrite the old versions of your CSS by uploading your modified files with the same name as the originals.
1. Open a PR to this repository to keep it in sync.
