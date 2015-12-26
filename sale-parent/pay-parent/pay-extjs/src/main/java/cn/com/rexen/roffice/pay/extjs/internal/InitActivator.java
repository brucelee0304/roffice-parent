package cn.com.rexen.roffice.pay.extjs.internal;

import cn.com.rexen.core.api.osgi.KalixBundleActivator;
import cn.com.rexen.core.util.SystemUtil;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.http.HttpService;

/**
 * Created by sunlf on 14-3-23.
 */
public class InitActivator extends KalixBundleActivator {

    private static final String BUNDLE_NAME = " Roffice Pay Extjs ";
    private ServiceReference reference;
    private HttpService httpService;

    @Override
    public void start(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Start-up %s bundle!!", BUNDLE_NAME));

        reference = bundleContext.getServiceReference(HttpService.class.getName());
        httpService = (HttpService) bundleContext.getService(reference);
        httpService.registerResources( contextPath+ "/app/roffice/pay", "/roffice/pay", null);
        httpService.registerResources(contextPath+ "/roffice/pay/resources/images", "/resources/images", null);
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        SystemUtil.succeedPrintln(String.format("Stop %s bundle!!", BUNDLE_NAME));

        if (httpService != null) {
            httpService.unregister(contextPath+ "/app/roffice/pay");
            httpService.unregister(contextPath+ "/roffice/pay/resources/images");
        }
        if (reference != null)
            bundleContext.ungetService(reference);
    }
}
