# Cumulocity IoT Compass widget[<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-compass-widget/releases/download/1.0.0/compass-widget.zip)

![Compasswidget](compass-widget.png)

## Features
**Realtime:** Realtime direction updates from defined measurement


## Installation

### Runtime Widget Deployment?

* This widget supports runtime deployment. Download the [Runtime Binary](https://github.com/SoftwareAG/cumulocity-compass-widget/releases/download/1.0.0/compass-widget.zip).


## Deploying the widget
To deploy the widget to your Cumulocity tenant

1. Download the latest version of this widget
2. Log into your Cumulocity tenant
3. If you do not have application builder installed, please follow the steps shown [here](https://github.com/SoftwareAG/cumulocity-app-builder)
4. If you have not yet created your application using the application Builder, please click on 'Application builder' and then click on 'Add application'
6. In your application, click on the 'More...' link on the right side of the screen
7. Click on 'Install widget'
8. Click on 'Choose File' and select the "compass-widget.zip" which you have downloaded
9.   Click on the 'Upload' button to add the widget to you tenant

## Adding the widget to your dashboard
1. To add the widget to your dashboard, click on your application and select the 'Add Widget' link at the top of the screen
2. Scroll down and select the 'Compass' widget
3. See the next section for widget configuration details
 

## Configuring the Widget through your Cumulocity tenant
1. In the 'Compass' widget:
    3a. Enter the "Measurement Fragment"
    3b. Enter the "Measurement Series"

The compass widget will refresh each time a new value is sent to the configured measurement for the device.

### Development - to enhance and test this widget in your local environment
1. Clone the repository on your local machine using `git clone https://github.com/SoftwareAG/cumulocity-compass-widget.git`.
2. Run `npm install` to download the module dependencies.
3. Run `c8ycli server -u https://your_tenant_url` to start the server.
4. Go to `http://localhost:9000/apps/cockpit/` in the browser to view and test your changes.
5. (Optional) push the changes back to this repository.

### Build - to create a new build of the compass-animation widget for the Runtime Widget Loader
1. Finish the development and testing on your local machine.
2. Run `gulp` to start the build process.
3. Use the `compass-widget.zip` file in the `dist` folder as your distribution file.

------------------------------

This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](http://tech.forums.softwareag.com/techjforum/forums/list.page?product=cumulocity).

You can find additional information in the [Software AG TECHcommunity](http://techcommunity.softwareag.com/home/-/product/name/cumulocity).


