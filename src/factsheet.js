/*
 *  Copyright (C) 2007 - 2012 GeoSolutions S.A.S.
 *  http://www.geo-solutions.it
 *
 *  GPLv3 + Classpath exception
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 /**
 * 
 * Factsheet display window.
 * 
 * Author: Lorenzo Pini (GeoSolutions S.A.S.)
 *
 */
Ext.IframeWindow = Ext.extend(Ext.Window, {
    onRender: function() {
        this.bodyCfg = {
            tag: 'iframe',
            src: FigisMap.currentSiteURI + '/http_proxy/proxy/?url=' + encodeURIComponent( this.src ),
            cls: this.bodyCls,
            style: {
                border: '0px none'
            }
        };
        Ext.IframeWindow.superclass.onRender.apply(this, arguments);
    }
});

Ext.onReady(function(){
	
	var tbarDiv = Ext.get('topBar');
    var mainDiv = Ext.get('main');
    //
	//Factsheet window
	//
	FigisMap.factsheetWin= new Ext.IframeWindow({
	    id:'factsheetWindow',
	    x: tbarDiv.getX()-5,
	    y: tbarDiv.getY(),
        width: tbarDiv.getWidth()+10,
        height: mainDiv.getHeight()+tbarDiv.getHeight(),
		title: "Factsheet",
        src:"http://figisapps.fao.org/fishery/vme/10/en",
		closeAction: 'hide',
		draggable: false,
        resizable: false,
		//modal: true,
	});
	
});
 
